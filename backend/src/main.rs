use axum::{routing::get, Json, Router, extract::State};
use serde::Serialize;
use sqlx::{PgPool, postgres::PgPoolOptions};
use std::{env, net::SocketAddr};
use tower_http::limit::RequestBodyLimitLayer;
#[derive(Clone)] struct AppState { db: PgPool }
#[derive(Serialize)] struct Health { status: &'static str }
async fn health(State(state): State<AppState>) -> Result<Json<Health>, axum::http::StatusCode> {
    sqlx::query("SELECT 1").execute(&state.db).await.map_err(|_| axum::http::StatusCode::SERVICE_UNAVAILABLE)?;
    Ok(Json(Health { status: "ok" }))
}
#[tokio::main] async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    let url = env::var("DATABASE_URL")?;
    let db = PgPoolOptions::new().max_connections(10).connect(&url).await?;
    let app = Router::new().route("/api/v1/health", get(health)).with_state(AppState { db }).layer(RequestBodyLimitLayer::new(1024 * 1024));
    let addr: SocketAddr = "0.0.0.0:8080".parse()?;
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}

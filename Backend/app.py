from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import crop_routes, fertilizer_routes, yield_routes

app = FastAPI(
    title="Smart Agriculture System",
    description="ML-based Crop, Fertilizer, Yield Prediction",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(crop_routes.router, prefix="/crop")
app.include_router(fertilizer_routes.router, prefix="/fertilizer")
app.include_router(yield_routes.router, prefix="/yield")

@app.get("/")
def home():
    return {"message": "Backend is running successfully"}
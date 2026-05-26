from fastapi import APIRouter
from schemas.yield_schema import YieldInput
from services.yield_service import predict_yield

router = APIRouter()

@router.post("/predict")
def yield_predict(data: YieldInput):
    result = predict_yield(data)
    return { "predicted_yield": round(float(result), 2)}
from fastapi import APIRouter
from schemas.fertilizer_schema import FertilizerInput
from services.fertilizer_service import predict_fertilizer

router = APIRouter()

@router.post("/predict")
def fertilizer_predict(data: FertilizerInput):
    result = predict_fertilizer(data)
    return {"recommended_fertilizer": result}
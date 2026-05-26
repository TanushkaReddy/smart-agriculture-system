from fastapi import APIRouter
from schemas.crop_schema import CropInput
from services.crop_service import predict_crop

router = APIRouter()

@router.post("/predict")
def crop_predict(data: CropInput):
    result = predict_crop(data)
    return {"recommended_crop": result}
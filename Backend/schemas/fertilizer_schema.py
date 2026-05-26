from pydantic import BaseModel

class FertilizerInput(BaseModel):
    temperature: float
    humidity: float
    moisture: float
    soil_type: int
    crop_type: int
    nitrogen: float
    potassium: float
    phosphorus: float
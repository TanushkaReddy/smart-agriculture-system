from pydantic import BaseModel

class YieldInput(BaseModel):
    crop: int
    crop_year: int
    season: int
    state: int
    area: float
    production: float
    rainfall: float
    pesticide: float
    fertilizer: float
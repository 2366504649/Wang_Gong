from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Dream, SessionLocal

router = APIRouter()


# get db session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# commit dream message and return result
@router.post("/submit_dream")
def submit_dream(description: str, db: Session = Depends(get_db)):
    # 模拟解梦结果
    interpretation = "这是您梦境的解读: 您的梦境描述意味着...（假数据）"

    # result to DB
    new_dream = Dream(description=description, interpretation=interpretation)
    db.add(new_dream)
    db.commit()
    db.refresh(new_dream)

    return {"status": "success", "interpretation": interpretation}


# get dream record
@router.get("/get_dreams")
def get_dreams(db: Session = Depends(get_db)):
    dreams = db.query(Dream).all()
    return [{"id": dream.id, "description": dream.description, "interpretation": dream.interpretation} for dream in
            dreams]

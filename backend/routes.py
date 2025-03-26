from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Dream, SessionLocal

router = APIRouter()


# 获取数据库会话
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 提交梦境并返回解梦结果
@router.post("/submit_dream")
def submit_dream(description: str, db: Session = Depends(get_db)):
    # 模拟解梦结果
    interpretation = "这是您梦境的解读: 您的梦境描述意味着...（假数据）"

    # 将梦境数据保存到数据库
    new_dream = Dream(description=description, interpretation=interpretation)
    db.add(new_dream)
    db.commit()
    db.refresh(new_dream)

    # 返回响应数据，确保返回的是字典或Pydantic模型
    return {"status": "success", "interpretation": interpretation}


# 获取所有梦境记录
@router.get("/get_dreams")
def get_dreams(db: Session = Depends(get_db)):
    dreams = db.query(Dream).all()
    return [{"id": dream.id, "description": dream.description, "interpretation": dream.interpretation} for dream in
            dreams]

import requests
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from models import Dream, SessionLocal
from pydantic import BaseModel
from sqlalchemy.orm import Session

router = APIRouter()


# 获取数据库会话
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 定义请求体模型
class DreamRequest(BaseModel):
    description: str


# 提交梦境信息并返回解读结果
@router.post("/submit_dream")
def submit_dream(request: DreamRequest, db: Session = Depends(get_db)):  # ✨ 关键改动
    # 模拟解梦结果
    interpretation = (
        f"This is the interpretation of your dream: {request.description} it is mean..."
    )

    # 存入数据库
    new_dream = Dream(description=request.description, interpretation=interpretation)
    db.add(new_dream)
    db.commit()
    db.refresh(new_dream)

    return {"status": "success", "interpretation": interpretation}


@router.get("/")
async def redirect_root():
    return RedirectResponse(url="http://localhost:3003/")


OLLAMA_URL = "http://localhost:11434/api/generate"


@router.get("/chat")
async def chat(message: str):
    payload = {"model": "mistral", "prompt": message}
    response = requests.post(OLLAMA_URL, json=payload)
    return response.json()

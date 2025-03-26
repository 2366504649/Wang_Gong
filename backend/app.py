from fastapi import FastAPI
from routes import router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# 注册路由
app.include_router(router)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有域名的跨域请求
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

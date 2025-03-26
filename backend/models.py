from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 创建数据库连接
DATABASE_URL = "sqlite:///./dreams.db"  # 使用SQLite作为示例
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# 梦境模型
class Dream(Base):
    __tablename__ = "dreams"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, index=True)
    interpretation = Column(String)

    def __repr__(self):
        return f"<Dream {self.description}>"


# 创建数据库表
Base.metadata.create_all(bind=engine)

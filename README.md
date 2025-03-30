# Wang_Gong
dream interpretation

local deploy

    启动 FastAPI 后端
    
    bash
    uvicorn app:app --reload
    
    启动 React 前端
    
    bash
    npm start
    
    npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch
    
docker compose deploy
    docker-compose up -d --build
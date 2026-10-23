from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="DevDocs AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "DevDocs AI API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/chat")
def chat(request: dict):
    question = request.get("question")
    return {"message": f"You asked: {question}"}
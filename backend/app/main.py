from fastapi import FastAPI

app = FastAPI(title="DevDocs AI API")


@app.get("/")
def read_root():
    return {"message": "DevDocs AI API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}
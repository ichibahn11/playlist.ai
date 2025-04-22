# Playlist.AI Backend

This directory contains the Python-based backend service for Playlist.AI, handling API requests, data processing, and external API integrations.

## Tech Stack

- **FastAPI**: Python web framework
- **SQLAlchemy**: SQL toolkit and ORM
- **Alembic**: Database migration tool
- **Pydantic**: Data validation and settings management
- **Pytest**: Testing framework
- **PostgreSQL**: Relational database
- **Redis**: Caching and message broker
- **Celery**: Distributed task queue
- **Docker**: Containerization

## Directory Structure

```
backend/
├── app/                    # Application package
│   ├── api/                # API endpoints
│   ├── core/               # Core functionality (config, security)
│   ├── models/             # Database models
│   ├── schemas/            # Pydantic schemas for validation
│   ├── services/           # Business logic and external services
│   └── main.py             # FastAPI application creation
├── tests/                  # Test directory
├── config/                 # Configuration files
├── migrations/             # Alembic migrations
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── requirements.txt        # Production dependencies
├── requirements-dev.txt    # Development dependencies
└── README.md               # This file
```

## Setup Instructions

### Local Development

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements-dev.txt
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/playlist_ai
   REDIS_URL=redis://localhost:6379/0
   OPENAI_API_KEY=your_openai_api_key
   YOUTUBE_API_KEY=your_youtube_api_key
   SECRET_KEY=your_jwt_secret_key
   ```

4. Run the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Docker Development

1. Make sure Docker and Docker Compose are installed

2. Build and run the containers:
   ```bash
   docker-compose up -d
   ```

3. Access the API at http://localhost:8000

4. API documentation is available at:
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

## API Endpoints

- **Authentication**: `/api/v1/auth/`
  - User registration, login, password reset

- **Users**: `/api/v1/users/`
  - User profile, preferences management

- **Playlists**: `/api/v1/playlists/`
  - Playlist generation, history, management

- **Tasks**: `/api/v1/tasks/`
  - Asynchronous task status and management

## Testing

Run tests with pytest:
```bash
pytest
```

For test coverage:
```bash
pytest --cov=app tests/
```

## Database Migrations

Generate a new migration after model changes:
```bash
alembic revision --autogenerate -m "Description of changes"
```

Apply migrations:
```bash
alembic upgrade head
``` 
-- Create ideas table
CREATE TABLE IF NOT EXISTS ideas (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    votes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on title for faster search/filtering
CREATE INDEX IF NOT EXISTS idx_ideas_title ON ideas(title);

-- Insert some sample data for testing
INSERT INTO ideas (title, description, votes) VALUES
    ('Add dark mode', 'Implement a dark theme option for better user experience', 5),
    ('Improve search', 'Add advanced filtering options', 3),
    ('Mobile app', 'Create a native mobile application', 8);


import pool from '../db';
import { Idea } from '../types/idea';

export class IdeaService {
  /**
   * Get all ideas, sorted by votes (desc), then by newest
   */
  async getAllIdeas(): Promise<Idea[]> {
    const result = await pool.query(
      `SELECT id, title, description, votes, created_at 
       FROM ideas 
       ORDER BY votes DESC, created_at DESC`
    );
    return result.rows;
  }

  /**
   * Create a new idea
   */
  async createIdea(title: string, description: string | null): Promise<Idea> {
    const result = await pool.query(
      `INSERT INTO ideas (title, description) 
       VALUES ($1, $2) 
       RETURNING id, title, description, votes, created_at`,
      [title, description]
    );
    return result.rows[0];
  }

  /**
   * Increment vote count for an idea
   */
  async voteOnIdea(id: number): Promise<Idea | null> {
    const result = await pool.query(
      `UPDATE ideas 
       SET votes = votes + 1 
       WHERE id = $1 
       RETURNING id, title, description, votes, created_at`,
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  }

  /**
   * Get an idea by ID
   */
  async getIdeaById(id: number): Promise<Idea | null> {
    const result = await pool.query(
      `SELECT id, title, description, votes, created_at 
       FROM ideas 
       WHERE id = $1`,
      [id]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  }
}


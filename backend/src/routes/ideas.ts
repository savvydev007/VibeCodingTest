import { Router, Request, Response } from 'express';
import { IdeaService } from '../services/ideaService';

export const ideasRouter = Router();
const ideaService = new IdeaService();

// GET /ideas - List all ideas, sorted by votes (desc), then by newest
ideasRouter.get('/', async (req: Request, res: Response) => {
  try {
    const ideas = await ideaService.getAllIdeas();
    res.json(ideas);
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(500).json({ error: 'Failed to fetch ideas' });
  }
});

// POST /ideas - Add a new idea
ideasRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const idea = await ideaService.createIdea(
      title.trim(),
      description?.trim() || null
    );

    res.status(201).json(idea);
  } catch (error) {
    console.error('Error creating idea:', error);
    res.status(500).json({ error: 'Failed to create idea' });
  }
});

// POST /ideas/:id/vote - Increment vote count
ideasRouter.post('/:id/vote', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid idea ID' });
    }

    const idea = await ideaService.voteOnIdea(id);

    if (!idea) {
      return res.status(404).json({ error: 'Idea not found' });
    }

    res.json(idea);
  } catch (error) {
    console.error('Error voting on idea:', error);
    res.status(500).json({ error: 'Failed to vote on idea' });
  }
});


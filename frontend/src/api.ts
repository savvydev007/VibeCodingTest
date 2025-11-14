import { Idea } from './types'

const API_BASE_URL = '/api'

export const fetchIdeas = async (): Promise<Idea[]> => {
  const response = await fetch(`${API_BASE_URL}/ideas`)
  if (!response.ok) {
    throw new Error('Failed to fetch ideas')
  }
  return response.json()
}

export const createIdea = async (
  title: string,
  description: string
): Promise<Idea> => {
  const response = await fetch(`${API_BASE_URL}/ideas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to create idea')
  }
  return response.json()
}

export const voteOnIdea = async (id: number): Promise<Idea> => {
  const response = await fetch(`${API_BASE_URL}/ideas/${id}/vote`, {
    method: 'POST',
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to vote on idea')
  }
  return response.json()
}


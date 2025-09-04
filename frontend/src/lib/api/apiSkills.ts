export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export async function fetchSkills(): Promise<Skill[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('API-URL ist nicht definiert');
  }

  const res = await fetch(apiUrl);
  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error('Fehler beim Laden der Skills');
  }

  return data.data.skills;
}
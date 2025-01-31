export interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    location: string;
    blog: string;
    company: string;
}

let cachedUser: GitHubUser;

export async function getGithubUser(username: string): Promise<GitHubUser> {
    if (cachedUser) return cachedUser;

    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    
    if (!response.ok) {
        throw new Error('Error al obtener datos de GitHub');
    }
    
    cachedUser = await response.json();
    return cachedUser;
} 
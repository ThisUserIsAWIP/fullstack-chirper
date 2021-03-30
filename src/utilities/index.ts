export interface User {
	id: number,
    name: string,
    _created: string
}
export interface Chirp {
	id: number,
    userid: User['id'],
    name?: string,
	content: string,
    _created: string;
}
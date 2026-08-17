/** Replace this local contract with a server action or API integration. */
export type ProjectRequest = { name:string; email:string; service:string; description:string; company?:string; phone?:string; budget?:string; timeline?:string };
export async function submitProjectRequest(_request: ProjectRequest): Promise<{ok:boolean}> { return { ok: true }; }


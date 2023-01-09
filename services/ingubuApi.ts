export class IngubuApi {
    constructor(private readonly password: string) {}
    
    private headers: Headers = new Headers({'Authorization': 'Basic ' + Buffer.from('admin:' + this.password).toString('base64')});
    private baseUrl = process.env.NEXT_PUBLIC_API_URL;

    public async validatePassword(): Promise<boolean> {
        try {
            const response = await fetch(this.baseUrl + '/login', {
                method: 'POST',
                headers: this.headers
            })
            const text = await response.text()

            return text === "True"
        }
        catch (err) {
            return false
        }
    }

    public async generate(endpoint: 'login'|'blogTopic'|'blogSection'|'blogExpander', prompt: string): Promise<string> {
        
        const formdata = new FormData()
        formdata.append(endpoint, prompt)

        const response = await fetch(this.baseUrl + '/' + endpoint.toLowerCase(), {
            method: 'POST',
            headers: this.headers,
            body: formdata
        })
        
        return await response.text()
    }

} 
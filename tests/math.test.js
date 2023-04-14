const multiply = require('../math.js');

describe('Multiplication tests', () => {
    
    it('should multiply two numbers', (done) => {
    
        const total = multiply(100, 20)
    
        expect(total).toBe(2000)
        done()
    });
    
    it('should multiply with default value', (done) => {
        
        const total = multiply(100)
    
        expect(total).toBe(5000)
        done()
    });

    it('should test if two numbers equal', (done) => {
        
        expect(200).toBe(200)
        done()
    });

    const add = (a, b)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(
                ()=>{
                    if(a < 0 || b < 0)
                    reject(new Error("Number should not be negative"))
                    resolve(a + b)
                }, 2000
            )
        }
            
        )
    }

    it('should add two numbers successfully', async () => {
        
        let result = await add(30, 20)
        await expect(result).toBe(50)
    });
});

let H, W, p, q, b

const init =()=> {
    p = document.getElementById('canvas')
    q = p.getContext('2d')
    H = p.height= window.innerHeight
    W = p.width = window.innerWidth
    b = document.getElementById('randomizeBtn')
    
   /*
    * canvas settings
    */
    q.fillStyle = "green"
    q.lineWidth = 5
    q.lineCap = "round"
    q.shadowColor = "rgba(0,0,0,0.7)"
    q.shadowOffsetX = 10
    q.shadowOffsetY = 5
    q.shadowBlur = 10
    
   /*
    * Effect settings
    */
    let size = W < H ? W * 0.3 : H * 0.3
    const maxLevel = 3
    const branches = 2
    let sides = 5
    let spread = 0.5
    let sc = 0.1
    let color = 'hsl(' + Math.random() * 360 + ',100%, 50%)'
    
    
    function drawBranch(level) {
        if (level > maxLevel) return
        q.beginPath()
        q.moveTo(0, 0)
        q.lineTo(size, 0)
        q.stroke()
        
        for (let i=0; i < branches; i++) {
            q.save()
            q.translate(size - (size/branches)*i, 0)
            q.scale(sc, sc)
            
            q.save()
            q.rotate(spread)
            drawBranch(level + 1)
            q.restore()
        
            q.save()
            q.rotate(-spread)
            drawBranch(level + 1)
            q.restore()
            
            q.restore()
        }
         
    }
    
    function drawFractal() {
        q.clearRect(0,0, W, H)
        q.save()
        q.strokeStyle = color
        q.translate(W/2, H/2)
        q.scale(1,1)
        q.rotate(0)
        
        for (let v=0; v < sides; v++) {
            q.rotate((Math.PI*2)/sides)
            drawBranch(0)
        }
        q.restore()
    }
    drawFractal()
    
    function randomizeFractal() {
        sides = Math.random() * 7 + 2
        spread = Math.random() * 2.9 + 0.1
        sc = Math.random() * 0.2 + 0.4
        color = 'hsl(' + Math.random() * 360 + ',100%, 50%)'
    
    }
    b.addEventListener('click', function() {
        randomizeFractal()
        drawFractal()
    })
    
    GTB.autoInit()
gtbA('Click a randomizer button at the upper left corner to produce various fractal Tree 🌳 shapes. Thank You!')

}

    

onload = init
const http=require('http')
const fs=require('fs')
const path=require('path')
const port=process.env.PORT||3000
const root=__dirname
const types={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml'}
function send(res,status,content,type){res.writeHead(status,{'Content-Type':type||'text/plain'});res.end(content)}
function serveFile(filePath,res){fs.stat(filePath,(err,st)=>{if(err||!st.isFile()){send(res,404,'Not Found');return}const ext=path.extname(filePath);const type=types[ext]||'application/octet-stream';fs.createReadStream(filePath).on('error',()=>send(res,500,'Server Error')).pipe(res);res.writeHead(200,{'Content-Type':type})})}
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');let p=url.pathname;p=decodeURIComponent(p);let filePath=path.join(root,p)
  if(p==='/'||p===''){filePath=path.join(root,'index.html')}
  serveFile(filePath,res)
})
server.listen(port,()=>{console.log('Server running at http://localhost:'+port+'/')})

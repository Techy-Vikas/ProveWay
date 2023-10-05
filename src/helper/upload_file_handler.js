import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

export async function uploadFile(realFileId) {

  const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [],
  };

  const auth = new GoogleAuth({
    credentials,
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  const service = google.drive({version: 'v3', auth});

 let fileId = realFileId;
  try {
    const CHUNK_SIZE = 1024 * 1024; // 1MB chunks (adjust as needed)
    const fileSize = fs.statSync('video_file.mp4').size;
    let start = 0;
    let end = Math.min(CHUNK_SIZE, fileSize);
  
    while (start < fileSize) {
      const media = {
        body: fs.createReadStream('video_file.mp4', { start, end }),
      };
  
      await service.files.update({
        fileId,
        media,
      }); 
  
      // Update start and end for the next chunk
      start = end;
      end = Math.min(start + CHUNK_SIZE, fileSize);
    }
  
    console.log('Upload complete.');
    
  } catch (err1) {
   
    throw err1;
  }
}

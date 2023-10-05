import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

export async function downloadFile(realFileId) {

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

  const dest = fs.createWriteStream('downloaded_video.mp4');

 let fileId = realFileId;
  try {
    const file = await service.files.get({
      fileId: fileId,
      alt: 'media',
    });
    file.data
    .on('end', () => console.log('Download complete.'))
    .on('error', (err) => console.error('Download error:', err))
    .pipe(dest);

  } catch (err) {
   
    throw err;
  }
}

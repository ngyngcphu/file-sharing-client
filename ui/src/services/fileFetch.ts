import { trackerServer, invoke } from '@services';

export const fileFetchService = {
    listHostName: (fname: string) => invoke<string[]>(trackerServer.get(`/api/file?fname=${fname}`)),
    listAll: () => invoke<FileAvailable[]>(trackerServer.get('/api/fileMetadata'))
};
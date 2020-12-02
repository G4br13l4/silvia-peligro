import { ModalInterface } from './Modal.Interface';
import { InstagramFeedInterface } from './InstagramFeed.Interface';

export interface AppStateInterface {
    modalState: ModalInterface;
    instagramFeed: InstagramFeedInterface;
}
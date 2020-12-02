import React, { useEffect } from 'react';
import './IGTV.scss';

export interface Props {
    markup: string;
}

export const IGTV = React.memo((props: Props) => {
    const { markup } = props;
    useEffect(() => {
        const existingScript = document.getElementById('instagram');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            script.id = 'instagram';
            document.body.appendChild(script);
            if (window['instgrm']) {
                window['instgrm'].Embeds.process()
            }
            return () => {
                document.body.removeChild(script);
            }
        } 
    });
    
    return (
        <div dangerouslySetInnerHTML={{ __html: markup}} className="igtv-video" />
    );
});

import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
    DocumentInitialProps,
} from "next/document";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }
    render() {
        //TODO: ADD DARK MODE TO HTML
        return (
            <Html className="dark">
                <Head />
                <body className="bg-gradient-to-b from-BackgroundGradient-From to-BackgroundGradient-To dark:from-dark-900 dark:to-dark-900 ">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;

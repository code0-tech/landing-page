export default function imageLoader({ src }) {
    return `${process.env.C0_BASE_PATH ?? ''}${src}`;
}

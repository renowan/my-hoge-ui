export type ClipboardPlugin = {
  copy: (
    text: string,
    success?: { title?: string; description?: string },
    failure?: { title?: string; description?: string },
  ) => void
}

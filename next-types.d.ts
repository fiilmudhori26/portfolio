declare module 'next' {
  import type { Metadata } from 'next/types'
  export type { Metadata }
  export type ResolvingMetadata = (parent: Metadata) => Metadata | Promise<Metadata>
  export type ResolvingViewport = (parent: unknown) => unknown
}

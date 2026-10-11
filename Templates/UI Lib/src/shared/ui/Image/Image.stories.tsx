import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '../skeleton'
import {
  FallbackImage,
  FallbackText,
  Image,
  ImageWrapper,
  Loader,
} from './Image'

import noImage from '@/shared/assets/images/no-image.png'

function ImageComponent({
  aspectRatio = '3/2',
  isLoading = false,
  isError,
  alt,
  src,
  fallbackSrc,
  fallbackText,
}: {
  aspectRatio: string
  isLoading: boolean
  isError: boolean
  alt: string
  src: string
  fallbackSrc: string
  fallbackText: string
}) {
  const resultSrc = isLoading ? '' : isError ? 'errorSrc' : src

  return (
    <ImageWrapper aspectRatio={aspectRatio} style={{ width: '50vw' }}>
      <Image src={resultSrc} alt={alt}>
        {!isLoading && (
          <>
            <FallbackImage src={fallbackSrc} alt={alt} />
            <FallbackText>{fallbackText}</FallbackText>
          </>
        )}
        <Loader>
          <Skeleton className='w-full h-full m-5' />
        </Loader>
      </Image>
    </ImageWrapper>
  )
}

/**
 *
 * **Image** allows you to manage image, add wrapper with ratio, loader, fallback image and text.
 *
 * ## Components
 *
 * - ImageWrapper to set aspect ratio and wrapper styles
 * - Image to set src and fallback
 * - FallbackImage is image that will be displayed when primary image is broken (have not correct src)
 * - FallbackText is text that will be displayed when primary image is broken (have not correct src)
 * - Loader will be displayed while Image or FallbackImage is loaded
 *
 */

const meta: Meta<typeof ImageComponent> = {
  args: {
    alt: 'image',
    src: 'https://placehold.co/600x400',
    fallbackSrc: noImage,
    fallbackText: 'Fallback Text',
  },
  argTypes: {
    alt: {
      description: 'alt for img tag',
    },
    src: {
      description: 'src for img tag',
    },
    fallbackSrc: {
      description: 'fallback src for img tag',
    },
    aspectRatio: {
      description: 'aspect ration for wrapper',
      table: {
        defaultValue: {
          summary: '3/2',
        },
      },
    },
  },
  component: ImageComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
					<ImageWrapper>
						<Image src='https://placehold.co/600x400' alt='image'>
							<FallbackImage
								src='https://placehold.co/600x400/000000/FFF'
								alt='fallback image'
							/>
							<FallbackText>
								Fallback Text {/* set fallback text */} 
							</FallbackText>
							<Loader>
								<Skeleton className='w-full h-full m-5' /> {/* replace with your loader */} 
							</Loader>
						</Image>
					</ImageWrapper>
  			`,
        language: 'tsx',
      },
    },
  },
}

export const Loaded: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
					<ImageWrapper>
						<Image src='https://placehold.co/600x400' alt='image'>
							<FallbackImage
								src='https://placehold.co/600x400/000000/FFF'
								alt='fallback image'
							/>
							<FallbackText>
								Fallback Text {/* set fallback text */} 
							</FallbackText>
							<Loader>
								<Skeleton className='w-full h-full m-5' /> {/* replace with your loader */} 
							</Loader>
						</Image>
					</ImageWrapper>
  			`,
        language: 'tsx',
      },
    },
  },
}

export const Error: Story = {
  args: {
    isError: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
					<ImageWrapper>
						<Image src='https://placehold.co/600x400' alt='image'>
							<FallbackImage
								src='https://placehold.co/600x400/000000/FFF'
								alt='fallback image'
							/>
							<FallbackText>
								Fallback Text {/* set fallback text */} 
							</FallbackText>
							<Loader>
								<Skeleton className='w-full h-full m-5' /> {/* replace with your loader */} 
							</Loader>
						</Image>
					</ImageWrapper>
  			`,
        language: 'tsx',
      },
    },
  },
}

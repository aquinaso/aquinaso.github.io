import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import useInfiniteScroll, { useInfiniteScrollType, } from 'hooks/useInfiniteScroll'
import { PostListItemType } from 'types/PostItem.types'

export type PostType = {
    node: {
        id: string
        frontmatter: {
          title: string
          summary: string
          date: string
          categories: string[]
          thumbnail: {
            publicURL: string
          }
        }
      }
}

type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
}



const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 50px 10px;
    }
`

const PostList: FunctionComponent<PostListProps> = function ({ 
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
   )

   return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: { 
            id,
            fields: { slug },
            frontmatter
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
        )}
    </PostListWrapper>
  )
}


export default PostList
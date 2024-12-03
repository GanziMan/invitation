import { CircularProgress } from '@mui/material'
import { CommentContainer, VisitorBox } from '../styles'
import PaginationComponent from '@/components/Pagination'
import LinesEllipsis from 'react-lines-ellipsis'
import { InfiniteData } from '@tanstack/react-query'
import { Fragment } from 'react'

interface commentDataType {
  name: string
  comment: string
  date: string
}

export default function CommentForm({
  isFetching,
  comments,
  commentPage,
  currentPage,
  handlePageChange,
}: {
  isFetching: boolean
  comments: commentDataType[]
  commentPage:
    | InfiniteData<
        | {
            code: 'VALIDATION ERROR'
            message: string
            status?: undefined
            data?: undefined
          }
        | {
            status: string
            data: {
              comments: {
                name: string
                comment: string
                date: string
              }[]
              totalPages: number
              nextCursor: number | null
            }
            code?: undefined
            message?: undefined
          }
        | undefined,
        unknown
      >
    | undefined
  currentPage: number
  handlePageChange: (_event: React.ChangeEvent<unknown>, page: number) => void
}) {
  return (
    <Fragment>
      <VisitorBox>방명록</VisitorBox>
      <CommentContainer>
        {isFetching && (
          <CircularProgress
            sx={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
              color: '#f1e0ce',
            }}
            size={30}
          />
        )}
        {comments &&
          comments?.map((comment: commentDataType) => (
            <div key={comment.date}>
              <h5>{comment.name}</h5>
              <LinesEllipsis
                text={comment.comment}
                maxLine="1"
                ellipsis="..."
                trimRight
                basedOn="letters"
                component="p"
              />
              <small>{comment.date}</small>
              <hr />
            </div>
          ))}

        <PaginationComponent
          count={commentPage?.pages[0]?.data?.totalPages!}
          page={currentPage}
          onChange={handlePageChange}
        />
      </CommentContainer>
    </Fragment>
  )
}

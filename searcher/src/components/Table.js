import React from 'react'
import { EuiInMemoryTable, EuiIcon } from '@elastic/eui'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Table = ({ json }) => {
  const rowsPerPage = 25
  const sizes = new Map([
    ['s', '5%'],
    ['l', '20%'],
  ])
  const columns = [
    {
      field: 'id',
      name: 'ID',
      truncateText: true,
      width: sizes.get('s'),
    },
    {
      field: 'postId',
      name: 'Post ID',
      truncateText: true,
      width: sizes.get('s'),
    },
    {
      field: 'name',
      name: 'Name',
      truncateText: true,
    },
    {
      field: 'email',
      name: 'Email',
      truncateText: true,
      width: sizes.get('l'),
    },
    {
      field: 'body',
      name: 'Body',
      truncateText: true,
    },
    {
      field: 'id',
      name: 'Link',
      render: (id) => (
        // <EuiLink onClick={() => navigate(`/articles/${id}`)} target='_blank'>
        //   <EuiIcon type='symlink' />
        // </EuiLink>
        <Link to={`/articles/${id}`}>
          <EuiIcon type='symlink' />
        </Link>
      ),
      width: sizes.get('s'),
    },
  ]

  const pagination = {
    initialPageSize: rowsPerPage,
    showPerPageOptions: false,
  }

  const search = {
    box: {
      incremental: true,
    },
  }

  const handleClick = (e) => {
    console.log(e.target.id)
  }

  return (
    <>
      <EuiInMemoryTable
        tableCaption='Demo for EuiBasicTable with pagination'
        items={json}
        itemId='id'
        columns={columns}
        search={search}
        pagination={pagination}
        onClick={handleClick}
      />
    </>
  )
}

Table.propTypes = {
  json: PropTypes.array,
}

export default Table

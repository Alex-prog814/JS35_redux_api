import React from 'react'

const UserFavorite = ({ user }) => {
  return (
    <>
        {user.favorites ? (
            <div>
                <img src="https://img.freepik.com/premium-vector/heart-shape-stock-illustration_92497-42.jpg" alt="" width="20" height="20" />
            </div>
        ) : (
            <div>
                <img src="https://static-00.iconduck.com/assets.00/white-heart-emoji-2048x2008-1l7jbme4.png" alt="" width="20" height="20" />
            </div>
        )}
    </>
  )
}

export default UserFavorite
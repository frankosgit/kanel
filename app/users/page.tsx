/* import getAllUsers from "@/lib/getAllUsers";
import Link from 'next/link'

export const metadata = {
    title: 'Users'
};

import React from 'react'

const page = async () => {
    const usersData: Promise<User[]> =  getAllUsers()
    const users = await usersData;


    const content = (
        <section>
            <h2>
                <Link href="">Back home</Link>
            </h2>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
  return content
}

export default page */
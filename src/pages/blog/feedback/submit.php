
<?php

$conn = mysqli_connect('localhost', 'nikblog','passwordmcpants', 'nikblog_db');

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}

$sql =
            'INSERT INTO comments (fname, lname, email, content, tos) VALUES (?, ?, ?, ?, ?)';

        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt === false) {
            echo mysqli_error($conn);
        } else {
            mysqli_stmt_bind_param(
                $stmt,
                'sss',
                $_POST['title'],
                $_POST['content'],
                $_POST['published_at']
            );
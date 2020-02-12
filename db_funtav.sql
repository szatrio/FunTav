-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Feb 2020 pada 19.18
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_funtav`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `itineraries`
--

CREATE TABLE `itineraries` (
  `id_itineraries` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `id_user` varchar(100) NOT NULL,
  `id_itnrs_custom` varchar(100) NOT NULL,
  `id_itnrs_package` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `itineraries`
--

INSERT INTO `itineraries` (`id_itineraries`, `date_created`, `id_user`, `id_itnrs_custom`, `id_itnrs_package`) VALUES
('1ea605dd', '2020-02-10 23:52:28', '266460a3', '', '41213'),
('b2565169', '2020-02-10 23:53:09', '266460a3', 'o13ho21i4', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `itnrs_custom`
--

CREATE TABLE `itnrs_custom` (
  `id_itnrs_custom` varchar(100) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `date_sent` datetime NOT NULL,
  `date_replied` datetime NOT NULL,
  `id_user` varchar(100) NOT NULL,
  `id_notes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `itnrs_custom`
--

INSERT INTO `itnrs_custom` (`id_itnrs_custom`, `origin`, `destination`, `date_start`, `date_end`, `duration`, `price`, `date_sent`, `date_replied`, `id_user`, `id_notes`) VALUES
('o13ho21i4', 'Nias', 'Bali', '2020-02-14 00:00:00', '2020-02-20 00:00:00', 6, 4000000, '2020-02-10 20:18:45', '0000-00-00 00:00:00', '266460a3', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `itnrs_package`
--

CREATE TABLE `itnrs_package` (
  `id_itnrs_package` varchar(100) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `normal_price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `id_notes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `itnrs_package`
--

INSERT INTO `itnrs_package` (`id_itnrs_package`, `origin`, `destination`, `date_start`, `date_end`, `duration`, `normal_price`, `discount`, `price`, `id_notes`) VALUES
('41213', 'Yogyakarta', 'Jakarta', '2020-03-12 00:00:00', '2020-03-16 00:00:00', 4, 3000000, 20, 2400000, '1172cc8e');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id_notes` varchar(100) NOT NULL,
  `budget` int(11) NOT NULL,
  `transportation` varchar(50) NOT NULL,
  `occupancy` varchar(50) NOT NULL,
  `foods` varchar(100) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `focus` varchar(50) NOT NULL,
  `people` int(11) NOT NULL,
  `medical_rec` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id_notes`, `budget`, `transportation`, `occupancy`, `foods`, `schedule`, `focus`, `people`, `medical_rec`) VALUES
('1172cc8e', 3000000, 'Train', 'Hotel', '', '', 'Cultural', 1, '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`, `role`, `name`) VALUES
('266460a3', 'satrio@abc.com', '$2a$10$8t9IU6bmkCBH7AIzuAaLz.7zb2gWOMVVT6cEoNPelWfcBV0h5WMny', 'all', 'Satrio Utomo'),
('2a2b702c', 'nana@abc.com', '$2a$10$do4fTyvlj02anzFJIe0RVObZ9ydPbBFOjCNJ9Eb8iZ4YdtzpZRUga', '', 'Nana Sungkar');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `itineraries`
--
ALTER TABLE `itineraries`
  ADD PRIMARY KEY (`id_itineraries`);

--
-- Indeks untuk tabel `itnrs_package`
--
ALTER TABLE `itnrs_package`
  ADD PRIMARY KEY (`id_itnrs_package`);

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_notes`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

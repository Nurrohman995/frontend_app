const url = 'http://127.0.0.1:8000/api/'

export default {
    getBarang : `${url}barang`,
    insertBarang : `${url}barang/postBarang`,
    getKategori : `${url}kategori`,
    insertKategori : `${url}kategori/post`,
    deleteKategori : `${url}kategori/delete`,
    updateKategori : `${url}kategori/update`,
    getTransaksi : `${url}history_transaksi`,
    postTransaksi : `${url}history_transaksi/post`,
}
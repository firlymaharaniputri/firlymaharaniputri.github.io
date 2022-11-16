$(document).ready(function(){
  $('.batur').click(function(){
      let isi = $(this).text();
      let tid = $(this).prop('id');
      let rid = tid.split('__');
      let id_baris = rid[1];
      let mhsw = $('#mhsw__'+id_baris).text();

      if(isi=='Hapus'){
          let konfirmasi = confirm(`Yakin mau menghapus ${mhsw} ??`);
          if(!konfirmasi) return;

          $('#garis__'+id_baris).fadeOut();

      }else{
          alert("Anda berada di kolom : " + $(this).html() + "!");
      }
  })
})
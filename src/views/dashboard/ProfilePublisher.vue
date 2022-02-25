<template>
  <div id="dashboard-content">
    <h3>Profil Penerbit</h3>
    <ul class="nav nav-pills nav-fill mt-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >Data Diri</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          >Data Direktur</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          >Berkas</a
        >
      </li>
    </ul>
    <form>
      <div class="tab-content border-0" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="penerbit" class="form-label">Nama Penerbit</label>
                <input
                  id="penerbit"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nama penerbit"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="provinsi" class="form-label">Provinsi</label>
                <select class="form-control" id="provinsi">
                  <option value="" selected disabled>Pilih Provinsi</option>
                  <option value="">Jawa Barat</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="kota" class="form-label">Kota</label>
                <select class="form-control" id="kota">
                  <option value="" selected disabled>Pilih Kota</option>
                  <option value="">Bandung</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="alamat" class="form-label">Alamat Penerbit</label>
                <textarea id="alamat" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="noTelp" class="form-label"
                  >No. Telepon Penerbit</label
                >
                <input type="number" id="noTelp" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="email" class="form-label">Email Penerbit</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Masukan email penerbit"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="alamatPusat" class="form-label"
                  >Alamat Kantor Pusat</label
                >
                <textarea id="alamatPusat" class="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="direktur" class="form-label">Nama Direktur</label>
                <input
                  id="direktur"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nama direktur"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="noHpDirektur" class="form-label"
                  >No. HP / Telepon Direktur</label
                >
                <input
                  id="noHpDirektur"
                  type="number"
                  class="form-control"
                  placeholder="Masukan nomor telepon"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="emailDirektur" class="form-label"
                  >Email Direktur</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="emailDirektur"
                    placeholder="Masukan email direktur"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="contactPerson1" class="form-label"
                  >Nama Kontak Person 1</label
                >
                <input
                  id="contactPerson1"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nama kontak person 1"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="contact1" class="form-label"
                  >Telepon / HP / Email Kontak Person 1</label
                >
                <input
                  id="contact1"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nomor telepon/hp/email"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="contactPerson2" class="form-label"
                  >Nama Kontak Person 2</label
                >
                <input
                  id="contactPerson2"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nama kontak person 2"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="contact2" class="form-label"
                  >Telepon / HP / Email Kontak Person 2</label
                >
                <input
                  id="contact2"
                  type="text"
                  class="form-control"
                  placeholder="Masukan nomor telepon/hp/email"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="file1" class="form-label"
                  >Surat Pengajuan Penilaian Buku</label
                >
                <input type="file" id="file1" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="file2" class="form-label"
                  >Surat Pernyataan Kebenaran Informasi</label
                >
                <input type="file" id="file2" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="file3" class="form-label">KTA IKAPI</label>
                <input type="file" id="file3" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="file4" class="form-label">Akta</label>
                <input type="file" id="file4" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="file5" class="form-label">NPWP</label>
                <input type="file" id="file5" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="file6" class="form-label">SIUP</label>
                <input type="file" id="file6" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

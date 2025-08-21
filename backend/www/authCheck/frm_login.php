<?php

require_once './../structure/head.php'; 

    echo '
        <div class="container">
            <div class="row justify-content-center min-vh-100 align-items-center">
                <div class="col-6">
                    <div class="card bg-dark text-white">
                        <div class="card-body p-5">

                                <div class="text-center mb-4">
                                    <h2 class="fw-bold mb-2">Admin Dashboard</h2>
                                    <p class="text-white">Melden Sie sich an, um fortzufahren</p>
                                </div>

                            <div class="card bg-dark text-white">
                                <div class="card-body text-center">

                                        <div class="mb-5 mt-5 w-full">

                                            <form method="POST" action="./login.php">
                                                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                                <p class="text-white-50 mb-5">Bitte gib dein User und dein Passwort ein!</p>

                                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                                    <input type="text" id="user" class="form-control form-control-lg" name="frm_username" />
                                                    <label class="form-label" for="user">Benutzer</label>
                                                </div>

                                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                                    <input type="password" id="password" class="form-control form-control-lg" name="frm_pwd" />
                                                    <label class="form-label" for="password">Passwort</label>
                                                </div>
                                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                            </form>

                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
';

require_once './../structure/footer.php'; 
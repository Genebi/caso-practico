<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Music Festival Cancun 2021</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	<link rel="stylesheet" href="css/index.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#" title="Music Festival Cancun 2021!">MFC</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="search/">Search Assistants</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		<div id="content">
			<div class="row container-title">
				<div class="col">
					<h1 class="text-center main-title">MUSIC FESTIVAL CANCUN 2021!</h1>
				</div>
			</div>

			<div class="row">
				<div class="col text-center">
					<button type="button" data-bs-toggle="modal" data-bs-target="#registerModal" id="registerButton">REGISTER NOW!</button>
				</div>
			</div>
		</div>
	</div>


	<div class="modal fade" id="registerModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">New Assistant</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form autocomplete="off">
						<div class="mb-3">
							<label for="assistant-name" class="col-form-label">Name:</label>
							<input type="text" class="form-control" id="assistant-name" placeholder="Required">
						</div>
						<div class="mb-3">
							<label for="assistant-age">Age:</label>
							<input type="number" min="15" max="99" class="form-control" id="assistant-age" value="15">
						</div>
						<div class="mb-3">
							<label for="assistant-city">City:</label>
							<input type="text" class="form-control" id="assistant-city" placeholder="Required">
						</div>
						<div class="mb-3">
							<label for="assistant-hobbies" class="col-form-label">Hobbies:</label>
							<textarea class="form-control" id="assistant-hobbies" placeholder="(Optional)"></textarea>
						</div>
					</form>
					<div class="text-danger text-center">
						<p class="error-message"></p>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModal">Close</button>
					<button type="button" class="btn btn-success" id="register">Register</button>
				</div>
			</div>
		</div>
	</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
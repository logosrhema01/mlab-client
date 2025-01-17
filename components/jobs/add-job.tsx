import { useUser } from "@auth0/nextjs-auth0/client";
import {
	Button,
	Input,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Switch,
	Textarea,
	useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
	CreateJobForm,
	Dataset,
	Model,
	client,
	dataWithAccessToken,
} from "../../lib";
import { AppModal } from "../modals";

export const AddJob = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { user } = useUser();
	const router = useRouter();
	const onAddJob = async () => {
		onOpenChange();
		if (user === undefined) {
			router.push("/api/auth/login");
			return;
		}
		try {
			const body: CreateJobForm = {
				name: name,
				description: description,
				model_id: Array.from(selectedModel)[0] as string,
				dataset_id: Array.from(selectedDataset)[0] as string,
				owner_id: user?.nickname as string,
				parameters: useDefaultParams
					? models.filter(
							(model: any) => model.id === Array.from(selectedModel)[0]
					  )[0].parameters
					: defaultParams,
			};
			client
				.POST("/api/jobs", dataWithAccessToken({ user, body }))
				.then(async () => {
					onOpenChange();
					setTimeout(() => {
						window.location.reload();
					}, 5000); // 5 seconds
				});
		} catch (error) {
			console.log(error);
			alert("Error adding job. Please try again.");
		}
	};

	const [name, setName] = useState("");
	const [models, setModels] = useState<Model[]>([]);
	const [datasets, setDatasets] = useState<Dataset[]>([]);
	const [selectedModel, setSelectedModel] = useState<any>(new Set([]));
	const [selectedDataset, setSelectedDataset] = useState<any>(new Set([]));
	const [useDefaultParams, setUseDefaultParams] = useState(true);
	const [defaultParams, setDefaultParams] = useState<any>({});
	const [description, setDescription] = useState("");

	const setParameters = (key: string, value: any) => {
		setDefaultParams((prev: any) => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		const fetchModels = async () => {
			if (!user) {
				return;
			}
			const { response: res } = await client.GET(
				"/api/models",
				dataWithAccessToken({ user })
			);
			const data = await res.json();
			setModels(data);
		};

		const fetchDatasets = async () => {
			if (!user) {
				return;
			}
			const { response: res } = await client.GET(
				"/api/datasets",
				dataWithAccessToken({ user })
			);
			const data = await res.json();
			setDatasets(data);
		};
		fetchDatasets();
		fetchModels();
	}, [user]);

	return (
		<div>
			<>
				<Button onPress={onOpen} color="primary">
					Add Job
				</Button>
				<AppModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					placement="top-center"
					size="3xl"
					isDismissable
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">
									Add Job
								</ModalHeader>
								<ModalBody>
									<Input
										label="Name"
										variant="bordered"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>

									<Select
										label={
											selectedDataset.size !== 0 ? null : "Select a Dataset"
										}
										className="max-w-full truncate"
										selectedKeys={selectedDataset}
										onSelectionChange={setSelectedDataset}
									>
										{datasets.map((dataset: any) => (
											<SelectItem key={dataset.id} value={dataset.id}>
												{dataset.name}
											</SelectItem>
										))}
									</Select>
									<Select
										label={selectedModel.size !== 0 ? null : "Select a Model"}
										className="max-w-full truncate"
										selectedKeys={selectedModel}
										onSelectionChange={setSelectedModel}
									>
										{models.map((model: any) => (
											<SelectItem key={model.id} value={model.id}>
												{model.name}
											</SelectItem>
										))}
									</Select>
									<Textarea
										label="Description"
										variant="bordered"
										required
										value={description}
										maxLength={500}
										onChange={(e) => setDescription(e.target.value)}
									/>
									<Switch
										color={selectedModel.size === 0 ? "default" : "primary"}
										isDisabled={selectedModel.size === 0}
										isSelected={useDefaultParams}
										onChange={() => {
											setUseDefaultParams(!useDefaultParams);
											setDefaultParams(
												models.filter(
													(model: any) =>
														model.id === Array.from(selectedModel)[0]
												)[0].parameters
											);
										}}
									>
										Use default parameters
									</Switch>
									{/* Default parameters */}
									{selectedModel.size !== 0 && !useDefaultParams && (
										<div className="flex flex-wrap md:inline-grid md:grid-cols-4 gap-2">
											{
												// Default parameters is an object of [string, Any]
												Object.entries(defaultParams).map((param: any) => (
													<div>
														<Input
															key={param[0]}
															label={param[0]}
															variant="bordered"
															required
															value={param[1]}
															type={
																typeof param[1] === "number" ? "number" : "text"
															}
															onChange={(e) =>
																setParameters(
																	param[0],
																	e.target.type === "number"
																		? Number(e.target.value)
																		: e.target.value
																)
															}
														/>
													</div>
												))
											}
										</div>
									)}
									{/* TODO: Add validation */}
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="flat" onClick={onClose}>
										Close
									</Button>
									<Button color="primary" onPress={onAddJob}>
										Add Job
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</AppModal>
			</>
		</div>
	);
};

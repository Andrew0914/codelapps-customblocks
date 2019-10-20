import './quick-card.view.scss';
import './quick-card.editor.scss';

const {
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { 
    InspectorControls,
    RichText,
    URLInputButton,
    MediaUpload 
} = wp.editor;

registerBlockType('guty/quick-card', {
    title: 'Quick card',
    icon: 'welcome-widgets-menus',
    category: 'common',
    className: 'wp-block-guty-quick-card',
    supports: {
        align: true,
    },

    attributes: {
        title:{
            type:'string'
        },
        bodyContent: {
            source: 'html',
            selector: '.copy-bd'
        },
        link:{
            type:'string',
            default: ''
        },
        imgUrl: {
            type: 'string',
            default: 'http://placehold.it/500'
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        function changeBodyContent(changes) {
            setAttributes({
                bodyContent: changes
            })
        }

        function selectLink( url ) {
            setAttributes( { link: url });
        }

        function changeTitle(change){
            setAttributes({
                title: change
            })
        }

        function selectImage(value) {
            setAttributes({
                imgUrl: value.sizes.full.url,
            })
        }

        return [
            <InspectorControls>
                {/* Later, when we have customizable options we will add stuff here! */}
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="col m2 s12">
                            <MediaUpload 
                                onSelect={selectImage}
                                render={ ({open}) => {
                                    return <img 
                                        className="card_img"
                                        src={attributes.imgUrl}
                                        onClick={open}
                                        />;
                                }}
                            />
                            </div>
                            <div class="col m10 s12">
                                <RichText 
                                    className="card-title"
                                    tagName="span"
                                    value={attributes.title}
                                    onChange={changeTitle}
                                    placeholder="Enter the title"
                                />
                                <RichText 
                                    tagName="p"
                                    value={attributes.bodyContent}
                                    onChange={changeBodyContent}
                                    placeholder="Enter the content"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <URLInputButton
                            url={props.attributes.link}
                            onChange= {selectLink}
                        />
                        <a href="#">Ver más</a>
                    </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const { attributes } = props;
        return (
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col m2 s12">
                            <img src={attributes.imgUrl} class="responsive-img rounded"/>
                        </div>
                        <div class="col m10 s12">
                            <RichText.Content 
                                class="card-title"
                                tagName="span"
                                value={attributes.title}
                            />
                            <RichText.Content
                                tagName="p"
                                value={attributes.bodyContent}
                            />
                        </div>
                    </div>
                </div>
                <div class="card-action right-align">
                    <a href={attributes.link}>Ver más</a>
                </div>
            </div>
        );
    },
});
